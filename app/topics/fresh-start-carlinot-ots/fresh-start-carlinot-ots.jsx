import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-ots');
}

export default function FreshStartCarlinotOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-ots" />;
}
