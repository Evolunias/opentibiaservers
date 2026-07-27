import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-season-argentina');
}

export default function NoResetSeasonArgentinaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-season-argentina" />;
}
