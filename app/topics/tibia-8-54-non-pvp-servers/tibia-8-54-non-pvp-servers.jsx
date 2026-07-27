import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-non-pvp-servers');
}

export default function Tibia854NonPvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-non-pvp-servers" />;
}
