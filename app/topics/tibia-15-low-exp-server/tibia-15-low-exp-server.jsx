import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-low-exp-server');
}

export default function Tibia15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-low-exp-server" />;
}
