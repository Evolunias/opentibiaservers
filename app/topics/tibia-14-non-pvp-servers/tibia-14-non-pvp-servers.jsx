import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-non-pvp-servers');
}

export default function Tibia14NonPvpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-non-pvp-servers" />;
}
