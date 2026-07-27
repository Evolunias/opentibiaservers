import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-website');
}

export default function CurrentTibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-website" />;
}
