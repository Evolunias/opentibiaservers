import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-72-high-exp-server');
}

export default function Classicus772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-72-high-exp-server" />;
}
