import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-ot');
}

export default function NewCarlinotOtKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-ot" />;
}
