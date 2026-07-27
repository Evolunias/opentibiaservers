import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp');
}

export default function SerenityPvpKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp" />;
}
