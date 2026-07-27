import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-website');
}

export default function ActiveBlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-website" />;
}
