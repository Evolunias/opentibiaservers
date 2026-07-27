import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-low-exp-server-north-america');
}

export default function ClassicusLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-low-exp-server-north-america" />;
}
