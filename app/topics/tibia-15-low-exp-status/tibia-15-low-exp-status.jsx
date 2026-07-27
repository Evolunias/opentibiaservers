import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-low-exp-status');
}

export default function Tibia15LowExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-low-exp-status" />;
}
