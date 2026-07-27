import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-fresh-start-server-france');
}

export default function TibiantisFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-fresh-start-server-france" />;
}
