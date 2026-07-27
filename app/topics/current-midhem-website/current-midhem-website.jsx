import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-website');
}

export default function CurrentMidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-website" />;
}
