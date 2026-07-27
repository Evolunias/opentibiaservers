import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-high-exp-status');
}

export default function Tibia76HighExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-high-exp-status" />;
}
