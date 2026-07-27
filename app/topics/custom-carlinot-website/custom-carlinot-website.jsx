import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-website');
}

export default function CustomCarlinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-website" />;
}
