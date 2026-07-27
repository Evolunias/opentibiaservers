import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-high-exp-server-sweden');
}

export default function ClassicusHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-high-exp-server-sweden" />;
}
