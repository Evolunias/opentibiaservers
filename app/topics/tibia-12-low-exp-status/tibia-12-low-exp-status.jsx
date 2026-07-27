import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-low-exp-status');
}

export default function Tibia12LowExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-low-exp-status" />;
}
