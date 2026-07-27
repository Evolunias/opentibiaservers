import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-website');
}

export default function HighrateBlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-website" />;
}
