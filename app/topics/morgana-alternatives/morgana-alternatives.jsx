import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-alternatives');
}

export default function MorganaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="morgana-alternatives" />;
}
