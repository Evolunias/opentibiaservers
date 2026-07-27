import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-website');
}

export default function CurrentRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-website" />;
}
