import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-evo-server');
}

export default function Tibia854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-evo-server" />;
}
