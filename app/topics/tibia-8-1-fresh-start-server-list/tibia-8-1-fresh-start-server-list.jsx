import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-fresh-start-server-list');
}

export default function Tibia81FreshStartServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-fresh-start-server-list" />;
}
