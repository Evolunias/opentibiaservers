import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-server-brazil');
}

export default function SerenityPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-server-brazil" />;
}
