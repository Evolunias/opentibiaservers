import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-season-brazil');
}

export default function RetroSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="retro-season-brazil" />;
}
