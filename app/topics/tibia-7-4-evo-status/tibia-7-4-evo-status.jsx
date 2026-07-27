import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-evo-status');
}

export default function Tibia74EvoStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-evo-status" />;
}
