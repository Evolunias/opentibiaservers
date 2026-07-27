import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-season-mexico');
}

export default function NoResetSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="no-reset-season-mexico" />;
}
