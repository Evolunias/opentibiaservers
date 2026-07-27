import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-open-tibia-alternatives');
}

export default function TitaniaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="titania-open-tibia-alternatives" />;
}
