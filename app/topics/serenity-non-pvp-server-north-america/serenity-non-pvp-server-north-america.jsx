import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-non-pvp-server-north-america');
}

export default function SerenityNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-non-pvp-server-north-america" />;
}
