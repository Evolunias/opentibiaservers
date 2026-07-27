import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-fresh-start-server-list');
}

export default function Tibia96FreshStartServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-fresh-start-server-list" />;
}
