import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot');
}

export default function ActiveCarlinotKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot" />;
}
