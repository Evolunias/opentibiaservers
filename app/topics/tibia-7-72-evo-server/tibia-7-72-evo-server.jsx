import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-evo-server');
}

export default function Tibia772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-evo-server" />;
}
