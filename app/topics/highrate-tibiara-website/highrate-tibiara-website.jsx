import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-website');
}

export default function HighrateTibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-website" />;
}
