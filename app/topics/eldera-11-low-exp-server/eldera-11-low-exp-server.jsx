import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-low-exp-server');
}

export default function Eldera11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-low-exp-server" />;
}
