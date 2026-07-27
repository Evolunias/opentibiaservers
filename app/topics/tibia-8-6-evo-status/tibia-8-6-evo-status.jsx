import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-evo-status');
}

export default function Tibia86EvoStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-evo-status" />;
}
