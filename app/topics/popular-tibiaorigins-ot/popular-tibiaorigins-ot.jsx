import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-ot');
}

export default function PopularTibiaoriginsOtKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-ot" />;
}
