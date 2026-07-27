import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-4-high-exp-server');
}

export default function Eldera74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-4-high-exp-server" />;
}
