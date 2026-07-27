import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-9-6-high-exp-server');
}

export default function Classicus96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-9-6-high-exp-server" />;
}
