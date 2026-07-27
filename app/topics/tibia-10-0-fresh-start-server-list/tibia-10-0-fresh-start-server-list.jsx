import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-fresh-start-server-list');
}

export default function Tibia100FreshStartServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-fresh-start-server-list" />;
}
