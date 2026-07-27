import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-open-tibia-alternatives');
}

export default function OceraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="ocera-open-tibia-alternatives" />;
}
