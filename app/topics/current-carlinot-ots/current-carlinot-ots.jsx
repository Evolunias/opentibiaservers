import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-ots');
}

export default function CurrentCarlinotOtsKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-ots" />;
}
