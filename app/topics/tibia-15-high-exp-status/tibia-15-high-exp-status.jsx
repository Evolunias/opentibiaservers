import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-high-exp-status');
}

export default function Tibia15HighExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-high-exp-status" />;
}
