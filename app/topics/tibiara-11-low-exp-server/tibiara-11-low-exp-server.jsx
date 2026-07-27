import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-low-exp-server');
}

export default function Tibiara11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-low-exp-server" />;
}
