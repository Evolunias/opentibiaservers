import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-high-exp-ot-server');
}

export default function Tibia86HighExpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-high-exp-ot-server" />;
}
