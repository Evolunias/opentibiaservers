import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-fresh-start-server-north-america');
}

export default function TibiantisFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-fresh-start-server-north-america" />;
}
