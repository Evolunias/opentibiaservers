import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-no-reset-server-latin-america');
}

export default function SerenityNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-no-reset-server-latin-america" />;
}
