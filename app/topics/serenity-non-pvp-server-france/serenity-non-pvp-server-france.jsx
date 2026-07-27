import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-non-pvp-server-france');
}

export default function SerenityNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-non-pvp-server-france" />;
}
