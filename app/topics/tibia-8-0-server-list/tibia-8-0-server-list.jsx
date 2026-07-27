import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-server-list');
}

export default function Tibia80ServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-server-list" />;
}
