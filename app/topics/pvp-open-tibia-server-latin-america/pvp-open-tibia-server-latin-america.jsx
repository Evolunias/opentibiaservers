import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-open-tibia-server-latin-america');
}

export default function PvpOpenTibiaServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-open-tibia-server-latin-america" />;
}
