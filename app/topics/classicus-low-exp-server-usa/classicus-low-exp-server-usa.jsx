import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-low-exp-server-usa');
}

export default function ClassicusLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-low-exp-server-usa" />;
}
