import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-ot');
}

export default function CustomCarlinotOtKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-ot" />;
}
