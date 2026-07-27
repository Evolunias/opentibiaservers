import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-high-exp-server-list');
}

export default function Tibia81HighExpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-high-exp-server-list" />;
}
