import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-website');
}

export default function HighrateTibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-website" />;
}
