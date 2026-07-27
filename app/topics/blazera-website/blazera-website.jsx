import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-website');
}

export default function BlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="blazera-website" />;
}
