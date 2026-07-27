import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-season-europe');
}

export default function NoResetSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="no-reset-season-europe" />;
}
