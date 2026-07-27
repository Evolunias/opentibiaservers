import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-low-exp-status');
}

export default function Tibia11LowExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-low-exp-status" />;
}
