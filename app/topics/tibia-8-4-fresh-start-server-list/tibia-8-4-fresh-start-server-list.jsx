import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-fresh-start-server-list');
}

export default function Tibia84FreshStartServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-fresh-start-server-list" />;
}
