import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-wiki-argentina');
}

export default function RetroWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-wiki-argentina" />;
}
