import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-high-exp-status');
}

export default function Tibia14HighExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-high-exp-status" />;
}
