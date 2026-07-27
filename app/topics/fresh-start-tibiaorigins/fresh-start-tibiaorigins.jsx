import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins');
}

export default function FreshStartTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins" />;
}
