import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-evo-ot-server');
}

export default function Tibia11EvoOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-evo-ot-server" />;
}
