import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-season-usa');
}

export default function NoResetSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-season-usa" />;
}
