import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-low-exp-server');
}

export default function Oldera12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-low-exp-server" />;
}
