import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-high-exp-status');
}

export default function Tibia84HighExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-high-exp-status" />;
}
