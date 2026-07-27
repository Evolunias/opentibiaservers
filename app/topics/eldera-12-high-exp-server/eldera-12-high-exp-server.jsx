import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-high-exp-server');
}

export default function Eldera12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-high-exp-server" />;
}
