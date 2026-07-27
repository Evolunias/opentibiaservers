import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-evo-status');
}

export default function Tibia14EvoStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-evo-status" />;
}
