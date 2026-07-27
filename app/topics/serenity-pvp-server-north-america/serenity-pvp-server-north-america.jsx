import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-server-north-america');
}

export default function SerenityPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-server-north-america" />;
}
