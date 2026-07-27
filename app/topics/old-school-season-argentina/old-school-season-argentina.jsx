import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-season-argentina');
}

export default function OldSchoolSeasonArgentinaKeywordPage() {
  return <StaticKeywordPage slug="old-school-season-argentina" />;
}
