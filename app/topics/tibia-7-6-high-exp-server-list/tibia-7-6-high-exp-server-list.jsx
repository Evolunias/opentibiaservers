import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-high-exp-server-list');
}

export default function Tibia76HighExpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-high-exp-server-list" />;
}
