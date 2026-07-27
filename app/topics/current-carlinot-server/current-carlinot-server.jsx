import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-server');
}

export default function CurrentCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-server" />;
}
