import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-low-exp-status');
}

export default function Tibia76LowExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-low-exp-status" />;
}
