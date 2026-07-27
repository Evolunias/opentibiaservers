import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-4-fresh-start-server');
}

export default function Canob74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-4-fresh-start-server" />;
}
