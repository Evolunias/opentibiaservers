import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-season-germany');
}

export default function RetroSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-season-germany" />;
}
