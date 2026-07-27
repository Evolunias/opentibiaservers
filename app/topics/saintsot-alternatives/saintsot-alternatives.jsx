import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-alternatives');
}

export default function SaintsotAlternativesKeywordPage() {
  return <StaticKeywordPage slug="saintsot-alternatives" />;
}
