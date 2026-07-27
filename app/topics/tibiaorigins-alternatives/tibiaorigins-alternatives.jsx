import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-alternatives');
}

export default function TibiaoriginsAlternativesKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-alternatives" />;
}
