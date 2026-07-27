import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-4-low-exp-server');
}

export default function Classicus74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-4-low-exp-server" />;
}
