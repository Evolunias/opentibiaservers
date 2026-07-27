import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-evo-client');
}

export default function Tibia1098EvoClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-evo-client" />;
}
