import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-website');
}

export default function CustomOriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-website" />;
}
