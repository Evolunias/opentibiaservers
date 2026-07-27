import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-open-tibia-alternatives');
}

export default function CelestaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="celesta-open-tibia-alternatives" />;
}
