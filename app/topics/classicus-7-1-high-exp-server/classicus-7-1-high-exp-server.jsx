import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-1-high-exp-server');
}

export default function Classicus71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-1-high-exp-server" />;
}
