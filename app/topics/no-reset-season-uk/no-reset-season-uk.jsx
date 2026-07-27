import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-season-uk');
}

export default function NoResetSeasonUkKeywordPage() {
  return <StaticKeywordPage slug="no-reset-season-uk" />;
}
