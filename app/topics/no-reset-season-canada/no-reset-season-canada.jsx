import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-season-canada');
}

export default function NoResetSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-season-canada" />;
}
