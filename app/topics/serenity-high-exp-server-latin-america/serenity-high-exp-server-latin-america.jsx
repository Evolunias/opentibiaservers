import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-high-exp-server-latin-america');
}

export default function SerenityHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-high-exp-server-latin-america" />;
}
