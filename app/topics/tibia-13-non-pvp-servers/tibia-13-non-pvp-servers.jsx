import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-non-pvp-servers');
}

export default function Tibia13NonPvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-non-pvp-servers" />;
}
