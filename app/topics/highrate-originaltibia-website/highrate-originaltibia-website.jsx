import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-website');
}

export default function HighrateOriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-website" />;
}
