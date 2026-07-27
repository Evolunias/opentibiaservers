import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-low-exp-server');
}

export default function Tibiara15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-low-exp-server" />;
}
