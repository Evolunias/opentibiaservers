import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-website');
}

export default function FreshStartCarlinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-website" />;
}
