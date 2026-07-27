import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-alternatives');
}

export default function AsteraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="astera-alternatives" />;
}
