import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-low-exp-ot-server');
}

export default function Tibia11LowExpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-low-exp-ot-server" />;
}
