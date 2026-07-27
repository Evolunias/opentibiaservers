import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-season-argentina');
}

export default function RetroSeasonArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-season-argentina" />;
}
