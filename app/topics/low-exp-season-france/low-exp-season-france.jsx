import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-season-france');
}

export default function LowExpSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="low-exp-season-france" />;
}
