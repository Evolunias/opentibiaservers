import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-server-latin-america');
}

export default function SerenityPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-server-latin-america" />;
}
