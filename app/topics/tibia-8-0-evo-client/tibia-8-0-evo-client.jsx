import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-evo-client');
}

export default function Tibia80EvoClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-evo-client" />;
}
