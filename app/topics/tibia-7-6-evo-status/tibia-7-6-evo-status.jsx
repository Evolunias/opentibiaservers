import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-evo-status');
}

export default function Tibia76EvoStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-evo-status" />;
}
