import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-high-exp-status');
}

export default function Tibia13HighExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-high-exp-status" />;
}
