import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-alternatives');
}

export default function OriginaltibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-alternatives" />;
}
