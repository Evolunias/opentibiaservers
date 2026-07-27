import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-low-exp-server-list');
}

export default function Tibia71LowExpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-low-exp-server-list" />;
}
