import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-season-canada');
}

export default function RetroSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="retro-season-canada" />;
}
