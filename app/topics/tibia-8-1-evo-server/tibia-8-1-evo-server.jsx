import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-evo-server');
}

export default function Tibia81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-evo-server" />;
}
