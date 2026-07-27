import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot');
}

export default function NoResetCarlinotKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot" />;
}
