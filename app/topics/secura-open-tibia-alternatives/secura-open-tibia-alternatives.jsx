import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-open-tibia-alternatives');
}

export default function SecuraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="secura-open-tibia-alternatives" />;
}
