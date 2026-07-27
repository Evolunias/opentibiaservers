import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-open-tibia-server-north-america');
}

export default function NonPvpOpenTibiaServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-open-tibia-server-north-america" />;
}
