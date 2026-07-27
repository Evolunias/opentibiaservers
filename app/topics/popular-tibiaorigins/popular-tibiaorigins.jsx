import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins');
}

export default function PopularTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins" />;
}
