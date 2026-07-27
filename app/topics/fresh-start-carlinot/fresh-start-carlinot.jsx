import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot');
}

export default function FreshStartCarlinotKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot" />;
}
