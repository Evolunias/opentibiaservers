import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-open-tibia-server-north-america');
}

export default function PvpOpenTibiaServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-open-tibia-server-north-america" />;
}
