import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-evo-client');
}

export default function Tibia11EvoClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-evo-client" />;
}
