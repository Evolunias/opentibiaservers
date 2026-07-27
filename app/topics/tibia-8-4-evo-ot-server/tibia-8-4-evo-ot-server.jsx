import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-evo-ot-server');
}

export default function Tibia84EvoOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-evo-ot-server" />;
}
