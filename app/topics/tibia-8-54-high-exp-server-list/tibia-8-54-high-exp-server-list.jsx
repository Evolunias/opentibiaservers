import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-high-exp-server-list');
}

export default function Tibia854HighExpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-high-exp-server-list" />;
}
