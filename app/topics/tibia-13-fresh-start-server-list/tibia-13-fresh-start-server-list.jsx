import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-fresh-start-server-list');
}

export default function Tibia13FreshStartServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-fresh-start-server-list" />;
}
