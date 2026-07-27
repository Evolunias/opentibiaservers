import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-evo-status');
}

export default function Tibia81EvoStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-evo-status" />;
}
