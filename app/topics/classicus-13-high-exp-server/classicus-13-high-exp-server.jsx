import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-high-exp-server');
}

export default function Classicus13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-high-exp-server" />;
}
