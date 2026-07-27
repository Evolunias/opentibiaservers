import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-low-exp-server-sweden');
}

export default function ClassickDrakoriaLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-low-exp-server-sweden" />;
}
