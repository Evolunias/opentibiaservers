import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins');
}

export default function TopTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins" />;
}
