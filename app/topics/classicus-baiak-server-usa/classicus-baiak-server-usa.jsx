import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-baiak-server-usa');
}

export default function ClassicusBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-baiak-server-usa" />;
}
