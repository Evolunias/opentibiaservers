import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-low-exp-status');
}

export default function Tibia13LowExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-low-exp-status" />;
}
