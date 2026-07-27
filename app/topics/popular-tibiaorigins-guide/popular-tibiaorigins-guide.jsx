import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-guide');
}

export default function PopularTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-guide" />;
}
