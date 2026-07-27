import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-4-fresh-start-server');
}

export default function Tibiantis84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-4-fresh-start-server" />;
}
