import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-retro-server-latin-america');
}

export default function SerenityRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-retro-server-latin-america" />;
}
