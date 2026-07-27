import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-low-exp-ot-server');
}

export default function Tibia14LowExpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-low-exp-ot-server" />;
}
