import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-ot');
}

export default function NoResetCarlinotOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-ot" />;
}
