import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-season-latin-america');
}

export default function NoResetSeasonLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-season-latin-america" />;
}
