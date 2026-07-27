import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-client');
}

export default function CurrentCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-client" />;
}
