import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-website');
}

export default function BestBlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-website" />;
}
