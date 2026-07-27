import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-evo-ot-server');
}

export default function Tibia100EvoOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-evo-ot-server" />;
}
