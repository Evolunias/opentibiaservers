import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-alternatives');
}

export default function NepreniaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="neprenia-alternatives" />;
}
