import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-guide');
}

export default function CustomTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-guide" />;
}
