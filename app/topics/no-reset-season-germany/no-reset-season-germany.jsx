import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-season-germany');
}

export default function NoResetSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="no-reset-season-germany" />;
}
