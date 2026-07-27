import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-website');
}

export default function FreshStartTibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-website" />;
}
