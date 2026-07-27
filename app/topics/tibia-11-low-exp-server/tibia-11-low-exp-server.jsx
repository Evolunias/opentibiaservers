import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-low-exp-server');
}

export default function Tibia11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-low-exp-server" />;
}
