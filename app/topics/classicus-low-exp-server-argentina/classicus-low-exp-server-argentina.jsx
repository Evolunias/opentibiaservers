import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-low-exp-server-argentina');
}

export default function ClassicusLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-low-exp-server-argentina" />;
}
