import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-website');
}

export default function TopBlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-website" />;
}
