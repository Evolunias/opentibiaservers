import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-low-exp-server');
}

export default function Eldera12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-low-exp-server" />;
}
