import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-website');
}

export default function TopOriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-website" />;
}
