import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-website');
}

export default function LowrateOriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-website" />;
}
