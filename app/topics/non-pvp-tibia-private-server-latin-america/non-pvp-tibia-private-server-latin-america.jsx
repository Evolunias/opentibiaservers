import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibia-private-server-latin-america');
}

export default function NonPvpTibiaPrivateServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibia-private-server-latin-america" />;
}
