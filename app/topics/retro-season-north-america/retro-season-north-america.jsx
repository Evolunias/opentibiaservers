import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-season-north-america');
}

export default function RetroSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-season-north-america" />;
}
