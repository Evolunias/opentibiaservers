import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-high-exp-server');
}

export default function Classicus14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-high-exp-server" />;
}
