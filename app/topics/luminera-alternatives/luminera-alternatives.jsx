import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-alternatives');
}

export default function LumineraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="luminera-alternatives" />;
}
