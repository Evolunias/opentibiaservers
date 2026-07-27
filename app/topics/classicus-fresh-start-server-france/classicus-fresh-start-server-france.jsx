import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-fresh-start-server-france');
}

export default function ClassicusFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-fresh-start-server-france" />;
}
