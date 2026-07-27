import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-server-list');
}

export default function Tibia71ServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-server-list" />;
}
