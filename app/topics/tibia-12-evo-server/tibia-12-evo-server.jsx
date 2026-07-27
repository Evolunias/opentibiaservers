import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-evo-server');
}

export default function Tibia12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-evo-server" />;
}
