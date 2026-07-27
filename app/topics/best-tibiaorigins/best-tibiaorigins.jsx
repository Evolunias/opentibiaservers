import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins');
}

export default function BestTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins" />;
}
