import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot');
}

export default function CustomCarlinotKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot" />;
}
