import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-high-exp-server');
}

export default function Eldera11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-high-exp-server" />;
}
