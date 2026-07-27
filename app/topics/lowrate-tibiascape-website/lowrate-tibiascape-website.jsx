import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-website');
}

export default function LowrateTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-website" />;
}
