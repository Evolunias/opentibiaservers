import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-website');
}

export default function CurrentOriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-website" />;
}
