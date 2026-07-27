import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-4-low-exp-server');
}

export default function Classicus84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-4-low-exp-server" />;
}
