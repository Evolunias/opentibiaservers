import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-non-pvp-servers');
}

export default function Tibia772NonPvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-non-pvp-servers" />;
}
