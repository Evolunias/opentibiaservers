import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-originaltibia-website');
}

export default function BestOriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-originaltibia-website" />;
}
