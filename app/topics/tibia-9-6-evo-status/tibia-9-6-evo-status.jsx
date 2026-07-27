import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-evo-status');
}

export default function Tibia96EvoStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-evo-status" />;
}
