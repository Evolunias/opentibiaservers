import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-evo-client');
}

export default function Tibia86EvoClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-evo-client" />;
}
