import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-low-exp-server-list');
}

export default function Tibia772LowExpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-low-exp-server-list" />;
}
