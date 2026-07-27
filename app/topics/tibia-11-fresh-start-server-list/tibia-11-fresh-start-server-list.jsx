import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-fresh-start-server-list');
}

export default function Tibia11FreshStartServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-fresh-start-server-list" />;
}
