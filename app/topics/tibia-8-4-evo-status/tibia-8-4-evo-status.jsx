import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-evo-status');
}

export default function Tibia84EvoStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-evo-status" />;
}
