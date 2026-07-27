import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-6-high-exp-server');
}

export default function Eldera86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-6-high-exp-server" />;
}
