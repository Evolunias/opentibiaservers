import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-website');
}

export default function HighrateMediviaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-website" />;
}
