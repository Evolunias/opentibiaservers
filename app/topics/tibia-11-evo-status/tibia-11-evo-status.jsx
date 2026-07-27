import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-evo-status');
}

export default function Tibia11EvoStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-evo-status" />;
}
