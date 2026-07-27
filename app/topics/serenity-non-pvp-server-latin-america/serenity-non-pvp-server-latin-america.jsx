import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-non-pvp-server-latin-america');
}

export default function SerenityNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-non-pvp-server-latin-america" />;
}
