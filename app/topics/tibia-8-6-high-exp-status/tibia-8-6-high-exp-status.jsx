import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-high-exp-status');
}

export default function Tibia86HighExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-high-exp-status" />;
}
