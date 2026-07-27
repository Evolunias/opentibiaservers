import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-website');
}

export default function CurrentBlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-website" />;
}
