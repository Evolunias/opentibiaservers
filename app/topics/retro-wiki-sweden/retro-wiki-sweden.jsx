import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-wiki-sweden');
}

export default function RetroWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="retro-wiki-sweden" />;
}
