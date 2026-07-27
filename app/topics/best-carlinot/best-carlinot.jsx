import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot');
}

export default function BestCarlinotKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot" />;
}
