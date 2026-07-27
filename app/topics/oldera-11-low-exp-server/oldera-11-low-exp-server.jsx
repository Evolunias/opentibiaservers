import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-low-exp-server');
}

export default function Oldera11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-low-exp-server" />;
}
