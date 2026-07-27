import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-low-exp-server-list');
}

export default function Tibia12LowExpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-low-exp-server-list" />;
}
