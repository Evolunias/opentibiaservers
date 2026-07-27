import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-alternatives');
}

export default function ObsidiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="obsidia-alternatives" />;
}
