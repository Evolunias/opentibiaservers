import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-4-low-exp-server');
}

export default function Tibiara84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-4-low-exp-server" />;
}
