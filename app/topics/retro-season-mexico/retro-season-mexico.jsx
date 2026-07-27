import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-season-mexico');
}

export default function RetroSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="retro-season-mexico" />;
}
