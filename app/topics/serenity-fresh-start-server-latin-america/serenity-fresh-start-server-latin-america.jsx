import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-fresh-start-server-latin-america');
}

export default function SerenityFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-fresh-start-server-latin-america" />;
}
