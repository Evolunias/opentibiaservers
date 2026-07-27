import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-ots');
}

export default function FreshStartMiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-ots" />;
}
