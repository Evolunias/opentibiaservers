import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-website');
}

export default function TopRealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-realera-website" />;
}
