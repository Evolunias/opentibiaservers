import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-baiak-server-germany');
}

export default function ClassicusBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-baiak-server-germany" />;
}
