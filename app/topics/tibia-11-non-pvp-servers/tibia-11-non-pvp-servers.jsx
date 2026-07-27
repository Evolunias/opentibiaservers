import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-non-pvp-servers');
}

export default function Tibia11NonPvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-non-pvp-servers" />;
}
