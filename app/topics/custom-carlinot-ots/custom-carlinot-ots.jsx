import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-ots');
}

export default function CustomCarlinotOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-ots" />;
}
