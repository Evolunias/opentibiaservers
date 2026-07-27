import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-evo-server');
}

export default function Tibia13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-evo-server" />;
}
