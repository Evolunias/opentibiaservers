import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-season-uk');
}

export default function RetroSeasonUkKeywordPage() {
  return <StaticKeywordPage slug="retro-season-uk" />;
}
