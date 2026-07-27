import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-high-exp-server-list');
}

export default function Tibia13HighExpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-high-exp-server-list" />;
}
