import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-high-exp-status');
}

export default function Tibia74HighExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-high-exp-status" />;
}
