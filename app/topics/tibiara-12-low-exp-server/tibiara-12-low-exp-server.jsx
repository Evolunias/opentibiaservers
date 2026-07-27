import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-low-exp-server');
}

export default function Tibiara12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-low-exp-server" />;
}
