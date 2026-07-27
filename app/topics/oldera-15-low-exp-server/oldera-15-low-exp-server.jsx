import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-low-exp-server');
}

export default function Oldera15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-low-exp-server" />;
}
