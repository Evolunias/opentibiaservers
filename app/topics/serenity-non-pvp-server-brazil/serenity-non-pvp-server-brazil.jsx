import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-non-pvp-server-brazil');
}

export default function SerenityNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-non-pvp-server-brazil" />;
}
