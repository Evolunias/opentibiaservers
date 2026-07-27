import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-ots');
}

export default function ActiveCarlinotOtsKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-ots" />;
}
