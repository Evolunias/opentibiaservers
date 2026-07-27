import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-high-exp-server-list');
}

export default function Tibia74HighExpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-high-exp-server-list" />;
}
