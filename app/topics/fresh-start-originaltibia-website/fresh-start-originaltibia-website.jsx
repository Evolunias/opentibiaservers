import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-originaltibia-website');
}

export default function FreshStartOriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-originaltibia-website" />;
}
