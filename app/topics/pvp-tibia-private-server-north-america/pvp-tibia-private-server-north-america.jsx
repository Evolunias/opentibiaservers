import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibia-private-server-north-america');
}

export default function PvpTibiaPrivateServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibia-private-server-north-america" />;
}
