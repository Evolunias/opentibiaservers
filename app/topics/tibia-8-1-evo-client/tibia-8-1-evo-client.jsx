import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-evo-client');
}

export default function Tibia81EvoClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-evo-client" />;
}
