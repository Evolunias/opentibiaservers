import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-baiak-server-poland');
}

export default function ClassicusBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-baiak-server-poland" />;
}
