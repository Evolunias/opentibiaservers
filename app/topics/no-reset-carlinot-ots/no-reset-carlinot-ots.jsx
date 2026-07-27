import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-ots');
}

export default function NoResetCarlinotOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-ots" />;
}
