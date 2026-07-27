import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-wiki-germany');
}

export default function RetroWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-wiki-germany" />;
}
