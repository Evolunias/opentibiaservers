import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-alternatives');
}

export default function SerenityAlternativesKeywordPage() {
  return <StaticKeywordPage slug="serenity-alternatives" />;
}
