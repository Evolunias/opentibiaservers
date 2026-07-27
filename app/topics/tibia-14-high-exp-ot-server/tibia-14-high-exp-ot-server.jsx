import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-high-exp-ot-server');
}

export default function Tibia14HighExpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-high-exp-ot-server" />;
}
