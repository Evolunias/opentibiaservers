import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-72-low-exp-server');
}

export default function Classicus772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-72-low-exp-server" />;
}
