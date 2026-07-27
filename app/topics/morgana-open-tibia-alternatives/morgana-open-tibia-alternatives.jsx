import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-open-tibia-alternatives');
}

export default function MorganaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="morgana-open-tibia-alternatives" />;
}
