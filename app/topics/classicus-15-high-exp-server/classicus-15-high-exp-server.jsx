import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-high-exp-server');
}

export default function Classicus15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-high-exp-server" />;
}
