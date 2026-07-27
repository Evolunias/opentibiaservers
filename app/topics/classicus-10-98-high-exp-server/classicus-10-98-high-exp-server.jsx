import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-98-high-exp-server');
}

export default function Classicus1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-98-high-exp-server" />;
}
