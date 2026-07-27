import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-low-exp-server-canada');
}

export default function ClassicusLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classicus-low-exp-server-canada" />;
}
