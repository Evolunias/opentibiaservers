import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-website');
}

export default function HighrateLumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-website" />;
}
