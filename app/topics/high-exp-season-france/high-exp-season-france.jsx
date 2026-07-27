import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-season-france');
}

export default function HighExpSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="high-exp-season-france" />;
}
