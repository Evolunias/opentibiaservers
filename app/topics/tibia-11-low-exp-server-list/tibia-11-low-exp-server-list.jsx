import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-low-exp-server-list');
}

export default function Tibia11LowExpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-low-exp-server-list" />;
}
