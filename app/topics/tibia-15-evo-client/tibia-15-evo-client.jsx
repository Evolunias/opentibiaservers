import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-evo-client');
}

export default function Tibia15EvoClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-evo-client" />;
}
