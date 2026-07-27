import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibia-private-server-latin-america');
}

export default function PvpTibiaPrivateServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibia-private-server-latin-america" />;
}
