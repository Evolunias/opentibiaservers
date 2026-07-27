import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-low-exp-server-list');
}

export default function Tibia76LowExpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-low-exp-server-list" />;
}
