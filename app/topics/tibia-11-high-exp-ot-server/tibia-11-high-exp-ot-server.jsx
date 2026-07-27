import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-high-exp-ot-server');
}

export default function Tibia11HighExpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-high-exp-ot-server" />;
}
