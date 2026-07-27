import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-fresh-start-server-list');
}

export default function Tibia854FreshStartServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-fresh-start-server-list" />;
}
