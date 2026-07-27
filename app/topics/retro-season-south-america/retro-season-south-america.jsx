import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-season-south-america');
}

export default function RetroSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-season-south-america" />;
}
