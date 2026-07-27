import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-low-exp-server-poland');
}

export default function ClassicusLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-low-exp-server-poland" />;
}
