import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-0-high-exp-server');
}

export default function Classicus100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-0-high-exp-server" />;
}
