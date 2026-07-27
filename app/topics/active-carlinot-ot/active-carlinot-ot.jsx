import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-ot');
}

export default function ActiveCarlinotOtKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-ot" />;
}
