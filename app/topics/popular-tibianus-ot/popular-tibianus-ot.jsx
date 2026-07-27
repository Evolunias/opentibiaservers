import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-ot');
}

export default function PopularTibianusOtKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-ot" />;
}
