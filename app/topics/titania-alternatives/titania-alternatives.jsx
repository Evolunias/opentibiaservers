import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-alternatives');
}

export default function TitaniaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="titania-alternatives" />;
}
