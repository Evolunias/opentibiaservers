import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-fresh-start-server-list');
}

export default function Tibia12FreshStartServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-fresh-start-server-list" />;
}
