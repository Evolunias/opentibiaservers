import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-high-exp-status');
}

export default function Tibia100HighExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-high-exp-status" />;
}
