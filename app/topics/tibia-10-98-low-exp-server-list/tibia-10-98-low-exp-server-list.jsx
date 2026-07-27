import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-low-exp-server-list');
}

export default function Tibia1098LowExpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-low-exp-server-list" />;
}
