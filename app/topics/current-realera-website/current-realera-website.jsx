import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-website');
}

export default function CurrentRealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-realera-website" />;
}
