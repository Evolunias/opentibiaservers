import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle');
}

export default function FreshStartMiracleKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle" />;
}
