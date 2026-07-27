import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-0-high-exp-server');
}

export default function Classicus80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-0-high-exp-server" />;
}
