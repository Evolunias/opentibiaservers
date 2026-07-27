import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-website');
}

export default function FreshStartTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-website" />;
}
