import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-evo-client');
}

export default function Tibia13EvoClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-evo-client" />;
}
