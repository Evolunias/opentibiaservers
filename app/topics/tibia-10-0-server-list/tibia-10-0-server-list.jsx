import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-server-list');
}

export default function Tibia100ServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-server-list" />;
}
