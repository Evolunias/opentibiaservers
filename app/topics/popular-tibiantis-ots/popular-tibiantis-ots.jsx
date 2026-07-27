import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-ots');
}

export default function PopularTibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-ots" />;
}
