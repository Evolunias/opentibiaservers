import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-ot-server');
}

export default function CurrentCarlinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-ot-server" />;
}
