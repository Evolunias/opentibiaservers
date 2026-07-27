import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-guide');
}

export default function LowrateTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-guide" />;
}
