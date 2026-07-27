import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-high-exp-status');
}

export default function Tibia772HighExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-high-exp-status" />;
}
