import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvp-servers');
}

export default function Tibia86PvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvp-servers" />;
}
