import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-low-exp-ot-server');
}

export default function Tibia96LowExpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-low-exp-ot-server" />;
}
