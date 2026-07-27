import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-high-exp-server-list');
}

export default function Tibia772HighExpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-high-exp-server-list" />;
}
