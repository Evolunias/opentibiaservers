import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-alternatives');
}

export default function JameraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="jamera-alternatives" />;
}
