import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-season-poland');
}

export default function NoResetSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="no-reset-season-poland" />;
}
