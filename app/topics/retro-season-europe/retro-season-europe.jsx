import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-season-europe');
}

export default function RetroSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="retro-season-europe" />;
}
