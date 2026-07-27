import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-wiki-usa');
}

export default function RetroWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-wiki-usa" />;
}
