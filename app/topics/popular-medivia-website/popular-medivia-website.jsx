import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-website');
}

export default function PopularMediviaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-website" />;
}
