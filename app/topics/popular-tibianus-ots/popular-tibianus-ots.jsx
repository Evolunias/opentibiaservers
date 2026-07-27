import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-ots');
}

export default function PopularTibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-ots" />;
}
