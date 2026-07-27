import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-low-exp-ot-server');
}

export default function Tibia12LowExpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-low-exp-ot-server" />;
}
