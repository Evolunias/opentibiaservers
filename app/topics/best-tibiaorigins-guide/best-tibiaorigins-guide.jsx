import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-guide');
}

export default function BestTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-guide" />;
}
