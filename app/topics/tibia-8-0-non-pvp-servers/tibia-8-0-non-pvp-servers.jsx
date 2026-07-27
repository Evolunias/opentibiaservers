import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-non-pvp-servers');
}

export default function Tibia80NonPvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-non-pvp-servers" />;
}
