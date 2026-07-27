import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-evo-client');
}

export default function Tibia854EvoClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-evo-client" />;
}
