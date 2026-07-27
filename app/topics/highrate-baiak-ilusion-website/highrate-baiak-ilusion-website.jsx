import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-website');
}

export default function HighrateBaiakIlusionWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-website" />;
}
