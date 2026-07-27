import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-website');
}

export default function ActiveOriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-website" />;
}
