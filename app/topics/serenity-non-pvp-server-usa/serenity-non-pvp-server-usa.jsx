import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-non-pvp-server-usa');
}

export default function SerenityNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="serenity-non-pvp-server-usa" />;
}
