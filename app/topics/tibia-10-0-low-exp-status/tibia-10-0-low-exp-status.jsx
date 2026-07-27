import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-low-exp-status');
}

export default function Tibia100LowExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-low-exp-status" />;
}
