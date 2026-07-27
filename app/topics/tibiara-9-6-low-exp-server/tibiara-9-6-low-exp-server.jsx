import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-low-exp-server');
}

export default function Tibiara96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-low-exp-server" />;
}
