import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-evo-client');
}

export default function Tibia12EvoClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-evo-client" />;
}
