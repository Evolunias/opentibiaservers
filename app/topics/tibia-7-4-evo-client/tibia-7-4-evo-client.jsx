import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-evo-client');
}

export default function Tibia74EvoClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-evo-client" />;
}
