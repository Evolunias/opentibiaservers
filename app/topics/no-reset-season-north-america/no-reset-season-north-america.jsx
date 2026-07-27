import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-season-north-america');
}

export default function NoResetSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-season-north-america" />;
}
