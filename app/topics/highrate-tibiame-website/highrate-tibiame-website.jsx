import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-website');
}

export default function HighrateTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-website" />;
}
