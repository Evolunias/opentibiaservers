import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-high-exp-server');
}

export default function Tibiara96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-high-exp-server" />;
}
