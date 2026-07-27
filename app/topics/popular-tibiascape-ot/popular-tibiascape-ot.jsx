import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-ot');
}

export default function PopularTibiascapeOtKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-ot" />;
}
