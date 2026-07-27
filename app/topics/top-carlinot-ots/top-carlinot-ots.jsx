import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-ots');
}

export default function TopCarlinotOtsKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-ots" />;
}
