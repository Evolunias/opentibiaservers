import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-wiki-north-america');
}

export default function RetroWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-wiki-north-america" />;
}
