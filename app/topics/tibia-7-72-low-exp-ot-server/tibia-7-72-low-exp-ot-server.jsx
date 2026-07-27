import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-low-exp-ot-server');
}

export default function Tibia772LowExpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-low-exp-ot-server" />;
}
