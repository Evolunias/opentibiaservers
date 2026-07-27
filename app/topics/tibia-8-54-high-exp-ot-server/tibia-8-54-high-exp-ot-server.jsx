import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-high-exp-ot-server');
}

export default function Tibia854HighExpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-high-exp-ot-server" />;
}
