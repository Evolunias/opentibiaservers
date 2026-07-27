import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-high-exp-server');
}

export default function Eldera14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-high-exp-server" />;
}
