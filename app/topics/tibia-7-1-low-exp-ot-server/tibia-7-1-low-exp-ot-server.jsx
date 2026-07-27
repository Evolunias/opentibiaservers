import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-low-exp-ot-server');
}

export default function Tibia71LowExpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-low-exp-ot-server" />;
}
