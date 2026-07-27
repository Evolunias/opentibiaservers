import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-website');
}

export default function OriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-website" />;
}
