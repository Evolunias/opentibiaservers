import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-ot');
}

export default function NewSeasonAmeriaOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-ot" />;
}
