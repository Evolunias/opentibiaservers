import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-alternatives');
}

export default function ThorniaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="thornia-alternatives" />;
}
