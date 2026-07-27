import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-baiak-server-brazil');
}

export default function ClassicusBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-baiak-server-brazil" />;
}
