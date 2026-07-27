import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvp-servers');
}

export default function Tibia96PvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvp-servers" />;
}
