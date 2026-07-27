import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-server-usa');
}

export default function SerenityPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-server-usa" />;
}
