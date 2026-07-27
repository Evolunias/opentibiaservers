import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-server-mexico');
}

export default function SerenityPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-server-mexico" />;
}
