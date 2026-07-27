import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-fresh-start-server');
}

export default function Tibiantis12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-fresh-start-server" />;
}
