import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-evo-server');
}

export default function Tibia76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-evo-server" />;
}
