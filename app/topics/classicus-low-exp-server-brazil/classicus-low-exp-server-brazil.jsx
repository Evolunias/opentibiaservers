import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-low-exp-server-brazil');
}

export default function ClassicusLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-low-exp-server-brazil" />;
}
