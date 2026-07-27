import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-baiak-server-mexico');
}

export default function ClassicusBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-baiak-server-mexico" />;
}
