import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-server-canada');
}

export default function SerenityPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-server-canada" />;
}
