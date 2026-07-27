import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-fresh-start-server-list');
}

export default function Tibia71FreshStartServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-fresh-start-server-list" />;
}
