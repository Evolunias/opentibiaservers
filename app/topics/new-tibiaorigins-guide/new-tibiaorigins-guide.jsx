import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-guide');
}

export default function NewTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-guide" />;
}
