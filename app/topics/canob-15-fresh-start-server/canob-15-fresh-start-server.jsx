import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-fresh-start-server');
}

export default function Canob15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="canob-15-fresh-start-server" />;
}
