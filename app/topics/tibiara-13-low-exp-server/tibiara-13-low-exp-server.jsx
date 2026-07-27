import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-13-low-exp-server');
}

export default function Tibiara13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-13-low-exp-server" />;
}
