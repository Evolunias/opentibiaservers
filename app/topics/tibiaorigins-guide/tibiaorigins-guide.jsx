import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-guide');
}

export default function TibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-guide" />;
}
