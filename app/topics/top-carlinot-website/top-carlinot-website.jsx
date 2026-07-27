import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-website');
}

export default function TopCarlinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-website" />;
}
