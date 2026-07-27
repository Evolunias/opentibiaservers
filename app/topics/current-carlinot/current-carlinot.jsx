import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot');
}

export default function CurrentCarlinotKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot" />;
}
