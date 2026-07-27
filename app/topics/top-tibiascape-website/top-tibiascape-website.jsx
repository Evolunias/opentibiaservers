import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-website');
}

export default function TopTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-website" />;
}
