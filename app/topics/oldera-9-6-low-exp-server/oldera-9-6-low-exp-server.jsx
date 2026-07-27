import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-low-exp-server');
}

export default function Oldera96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-low-exp-server" />;
}
