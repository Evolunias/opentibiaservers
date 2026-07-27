import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-high-exp-ot-server');
}

export default function Tibia15HighExpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-high-exp-ot-server" />;
}
