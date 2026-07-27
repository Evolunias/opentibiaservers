import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-website');
}

export default function TopRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-website" />;
}
