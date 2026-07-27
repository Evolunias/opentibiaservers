import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-season-france');
}

export default function BaiakSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-season-france" />;
}
