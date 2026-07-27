import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-fresh-start-server');
}

export default function Canob12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="canob-12-fresh-start-server" />;
}
