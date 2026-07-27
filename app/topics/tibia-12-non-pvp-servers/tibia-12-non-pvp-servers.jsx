import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-non-pvp-servers');
}

export default function Tibia12NonPvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-non-pvp-servers" />;
}
