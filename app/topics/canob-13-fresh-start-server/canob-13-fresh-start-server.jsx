import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-13-fresh-start-server');
}

export default function Canob13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="canob-13-fresh-start-server" />;
}
