import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-ot');
}

export default function CurrentCarlinotOtKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-ot" />;
}
