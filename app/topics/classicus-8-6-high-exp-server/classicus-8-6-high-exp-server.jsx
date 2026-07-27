import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-6-high-exp-server');
}

export default function Classicus86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-6-high-exp-server" />;
}
