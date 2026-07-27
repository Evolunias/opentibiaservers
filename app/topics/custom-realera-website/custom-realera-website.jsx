import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera-website');
}

export default function CustomRealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-realera-website" />;
}
