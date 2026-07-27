import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-evo-client');
}

export default function Tibia772EvoClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-evo-client" />;
}
