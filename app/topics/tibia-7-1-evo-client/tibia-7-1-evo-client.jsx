import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-evo-client');
}

export default function Tibia71EvoClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-evo-client" />;
}
