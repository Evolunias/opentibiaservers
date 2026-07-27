import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-website');
}

export default function BestCarlinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-website" />;
}
