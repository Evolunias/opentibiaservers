import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-guide');
}

export default function ActiveTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-guide" />;
}
