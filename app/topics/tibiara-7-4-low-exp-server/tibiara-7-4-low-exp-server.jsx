import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-4-low-exp-server');
}

export default function Tibiara74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-4-low-exp-server" />;
}
