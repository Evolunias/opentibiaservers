import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-high-exp-status');
}

export default function Tibia71HighExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-high-exp-status" />;
}
