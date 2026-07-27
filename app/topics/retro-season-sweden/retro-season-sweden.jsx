import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-season-sweden');
}

export default function RetroSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="retro-season-sweden" />;
}
