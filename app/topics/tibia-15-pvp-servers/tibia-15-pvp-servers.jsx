import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-servers');
}

export default function Tibia15PvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-servers" />;
}
