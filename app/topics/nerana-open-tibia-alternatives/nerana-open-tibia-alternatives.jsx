import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-open-tibia-alternatives');
}

export default function NeranaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="nerana-open-tibia-alternatives" />;
}
