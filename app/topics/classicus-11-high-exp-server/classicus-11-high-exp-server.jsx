import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-high-exp-server');
}

export default function Classicus11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-high-exp-server" />;
}
