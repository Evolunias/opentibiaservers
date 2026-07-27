import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-evo-ot-server');
}

export default function Tibia81EvoOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-evo-ot-server" />;
}
