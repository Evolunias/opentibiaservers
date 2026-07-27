import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-high-exp-status');
}

export default function Tibia11HighExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-high-exp-status" />;
}
