import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-high-exp-server');
}

export default function Eldera15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-high-exp-server" />;
}
