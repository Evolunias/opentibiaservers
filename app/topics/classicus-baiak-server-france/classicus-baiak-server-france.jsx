import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-baiak-server-france');
}

export default function ClassicusBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-baiak-server-france" />;
}
