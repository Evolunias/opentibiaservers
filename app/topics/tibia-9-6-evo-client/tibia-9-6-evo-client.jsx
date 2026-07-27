import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-evo-client');
}

export default function Tibia96EvoClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-evo-client" />;
}
