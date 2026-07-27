import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-high-exp-server-list');
}

export default function Tibia12HighExpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-high-exp-server-list" />;
}
