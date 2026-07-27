import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-6-high-exp-server');
}

export default function Oldera76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-6-high-exp-server" />;
}
