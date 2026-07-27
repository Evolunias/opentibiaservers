import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-open-tibia-alternatives');
}

export default function LumineraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="luminera-open-tibia-alternatives" />;
}
