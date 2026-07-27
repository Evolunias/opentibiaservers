import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-guide');
}

export default function TopTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-guide" />;
}
