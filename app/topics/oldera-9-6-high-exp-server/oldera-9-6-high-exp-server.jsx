import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-high-exp-server');
}

export default function Oldera96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-high-exp-server" />;
}
