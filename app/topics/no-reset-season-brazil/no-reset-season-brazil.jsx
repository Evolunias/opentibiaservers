import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-season-brazil');
}

export default function NoResetSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="no-reset-season-brazil" />;
}
