import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-season-france');
}

export default function NoResetSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="no-reset-season-france" />;
}
