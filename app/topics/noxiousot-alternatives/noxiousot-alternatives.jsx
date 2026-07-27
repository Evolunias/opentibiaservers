import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-alternatives');
}

export default function NoxiousotAlternativesKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-alternatives" />;
}
