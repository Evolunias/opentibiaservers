import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-non-pvp-server-canada');
}

export default function SerenityNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="serenity-non-pvp-server-canada" />;
}
