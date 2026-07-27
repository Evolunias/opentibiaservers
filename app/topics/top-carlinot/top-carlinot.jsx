import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot');
}

export default function TopCarlinotKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot" />;
}
