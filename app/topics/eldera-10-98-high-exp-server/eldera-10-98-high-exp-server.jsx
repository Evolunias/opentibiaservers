import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-98-high-exp-server');
}

export default function Eldera1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-98-high-exp-server" />;
}
