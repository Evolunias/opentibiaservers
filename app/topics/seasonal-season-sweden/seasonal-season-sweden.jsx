import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-season-sweden');
}

export default function SeasonalSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="seasonal-season-sweden" />;
}
