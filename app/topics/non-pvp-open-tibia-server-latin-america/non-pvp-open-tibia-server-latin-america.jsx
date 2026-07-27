import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-open-tibia-server-latin-america');
}

export default function NonPvpOpenTibiaServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-open-tibia-server-latin-america" />;
}
