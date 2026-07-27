import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-high-exp-server');
}

export default function Eldera100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-high-exp-server" />;
}
