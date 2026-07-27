import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-high-exp-server-list');
}

export default function Tibia96HighExpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-high-exp-server-list" />;
}
