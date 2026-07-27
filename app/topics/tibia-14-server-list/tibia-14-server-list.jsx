import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-server-list');
}

export default function Tibia14ServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-server-list" />;
}
