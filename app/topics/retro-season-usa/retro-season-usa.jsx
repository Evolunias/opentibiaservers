import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-season-usa');
}

export default function RetroSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-season-usa" />;
}
