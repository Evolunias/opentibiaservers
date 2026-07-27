import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-9-6-high-exp-server');
}

export default function Eldera96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-9-6-high-exp-server" />;
}
