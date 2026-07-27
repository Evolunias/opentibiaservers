import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-guide');
}

export default function CurrentTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-guide" />;
}
