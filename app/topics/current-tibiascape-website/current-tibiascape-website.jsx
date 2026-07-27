import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-website');
}

export default function CurrentTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-website" />;
}
