import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-alternatives');
}

export default function HarmoniaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="harmonia-alternatives" />;
}
