import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-72-high-exp-server');
}

export default function Eldera772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-72-high-exp-server" />;
}
