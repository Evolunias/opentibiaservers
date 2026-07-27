import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-high-exp-status');
}

export default function Tibia96HighExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-high-exp-status" />;
}
