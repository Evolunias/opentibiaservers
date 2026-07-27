import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-baiak-server-argentina');
}

export default function ClassicusBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-baiak-server-argentina" />;
}
