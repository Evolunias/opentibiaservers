import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-low-exp-server-south-america');
}

export default function ClassicusLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-low-exp-server-south-america" />;
}
