import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-ots');
}

export default function PopularTibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-ots" />;
}
