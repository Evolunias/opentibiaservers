import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-alternatives');
}

export default function HarmoniaOtAlternativesKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-alternatives" />;
}
