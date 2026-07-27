import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-season-poland');
}

export default function RetroSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="retro-season-poland" />;
}
