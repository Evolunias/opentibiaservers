import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-low-exp-ot-server');
}

export default function Tibia76LowExpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-low-exp-ot-server" />;
}
