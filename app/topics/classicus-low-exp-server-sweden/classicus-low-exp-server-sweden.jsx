import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-low-exp-server-sweden');
}

export default function ClassicusLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-low-exp-server-sweden" />;
}
