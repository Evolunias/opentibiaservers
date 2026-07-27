import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-fresh-start-server-mexico');
}

export default function TibiantisFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-fresh-start-server-mexico" />;
}
