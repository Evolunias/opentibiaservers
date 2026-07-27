import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-season-france');
}

export default function RetroSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="retro-season-france" />;
}
