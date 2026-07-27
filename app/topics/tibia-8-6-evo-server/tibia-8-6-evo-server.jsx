import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-evo-server');
}

export default function Tibia86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-evo-server" />;
}
