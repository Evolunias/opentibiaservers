import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-alternatives');
}

export default function TibiaraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="tibiara-alternatives" />;
}
