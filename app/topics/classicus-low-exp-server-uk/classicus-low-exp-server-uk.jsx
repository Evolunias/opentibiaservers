import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-low-exp-server-uk');
}

export default function ClassicusLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-low-exp-server-uk" />;
}
