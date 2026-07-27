import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-low-exp-server-list');
}

export default function Tibia854LowExpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-low-exp-server-list" />;
}
