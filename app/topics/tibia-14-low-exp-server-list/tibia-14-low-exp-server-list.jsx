import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-low-exp-server-list');
}

export default function Tibia14LowExpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-low-exp-server-list" />;
}
