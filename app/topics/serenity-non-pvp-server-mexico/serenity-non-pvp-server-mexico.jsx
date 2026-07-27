import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-non-pvp-server-mexico');
}

export default function SerenityNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="serenity-non-pvp-server-mexico" />;
}
