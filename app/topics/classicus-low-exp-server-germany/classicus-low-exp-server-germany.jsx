import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-low-exp-server-germany');
}

export default function ClassicusLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-low-exp-server-germany" />;
}
