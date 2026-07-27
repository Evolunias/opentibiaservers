import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-ot');
}

export default function CurrentMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-ot" />;
}
