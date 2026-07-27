import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-open-tibia-alternatives');
}

export default function PremiaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="premia-open-tibia-alternatives" />;
}
