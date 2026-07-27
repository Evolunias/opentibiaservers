import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-fresh-start-server-list');
}

export default function Tibia86FreshStartServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-fresh-start-server-list" />;
}
