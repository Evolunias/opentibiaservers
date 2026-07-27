import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-evo-server');
}

export default function Tibia11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-evo-server" />;
}
