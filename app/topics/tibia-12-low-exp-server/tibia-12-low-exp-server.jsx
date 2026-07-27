import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-low-exp-server');
}

export default function Tibia12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-low-exp-server" />;
}
