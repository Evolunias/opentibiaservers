import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-wiki-mexico');
}

export default function RetroWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="retro-wiki-mexico" />;
}
