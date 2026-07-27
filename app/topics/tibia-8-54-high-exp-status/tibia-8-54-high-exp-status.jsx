import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-high-exp-status');
}

export default function Tibia854HighExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-high-exp-status" />;
}
