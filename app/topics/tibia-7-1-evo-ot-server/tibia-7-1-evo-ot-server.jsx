import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-evo-ot-server');
}

export default function Tibia71EvoOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-evo-ot-server" />;
}
