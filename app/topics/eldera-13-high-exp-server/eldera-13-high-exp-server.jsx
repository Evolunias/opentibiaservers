import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-13-high-exp-server');
}

export default function Eldera13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-13-high-exp-server" />;
}
