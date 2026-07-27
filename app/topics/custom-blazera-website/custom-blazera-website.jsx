import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-website');
}

export default function CustomBlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-website" />;
}
