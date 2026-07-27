import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibia-private-server-north-america');
}

export default function NonPvpTibiaPrivateServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibia-private-server-north-america" />;
}
