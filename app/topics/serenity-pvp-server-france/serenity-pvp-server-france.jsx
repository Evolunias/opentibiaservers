import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-server-france');
}

export default function SerenityPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-server-france" />;
}
