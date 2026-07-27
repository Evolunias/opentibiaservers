import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-guide');
}

export default function FreshStartTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-guide" />;
}
