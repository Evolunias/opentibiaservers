import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle');
}

export default function TopMiracleKeywordPage() {
  return <StaticKeywordPage slug="top-miracle" />;
}
