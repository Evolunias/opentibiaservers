import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins');
}

export default function CurrentTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins" />;
}
