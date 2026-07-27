import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-low-exp-ot-server');
}

export default function Tibia15LowExpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-low-exp-ot-server" />;
}
