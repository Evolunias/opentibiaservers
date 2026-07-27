import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-website');
}

export default function CustomRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-website" />;
}
