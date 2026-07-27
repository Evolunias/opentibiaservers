import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-high-exp-server-south-america');
}

export default function ClassicusHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-high-exp-server-south-america" />;
}
