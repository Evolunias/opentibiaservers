import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-website');
}

export default function HighrateRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-website" />;
}
