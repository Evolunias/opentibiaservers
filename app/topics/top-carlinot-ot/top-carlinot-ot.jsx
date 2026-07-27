import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-ot');
}

export default function TopCarlinotOtKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-ot" />;
}
