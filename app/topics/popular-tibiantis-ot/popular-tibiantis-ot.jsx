import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-ot');
}

export default function PopularTibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-ot" />;
}
