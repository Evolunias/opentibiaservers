import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-evo-server');
}

export default function Tibia84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-evo-server" />;
}
