import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-low-exp-status');
}

export default function Tibia854LowExpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-low-exp-status" />;
}
