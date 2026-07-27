import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvp-servers');
}

export default function Tibia76PvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvp-servers" />;
}
