import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle');
}

export default function CurrentMiracleKeywordPage() {
  return <StaticKeywordPage slug="current-miracle" />;
}
