import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-low-exp-server-latin-america');
}

export default function SerenityLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-low-exp-server-latin-america" />;
}
