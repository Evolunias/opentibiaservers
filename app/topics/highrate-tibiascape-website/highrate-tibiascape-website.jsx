import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape-website');
}

export default function HighrateTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape-website" />;
}
