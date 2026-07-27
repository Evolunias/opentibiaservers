import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-wiki-europe');
}

export default function RetroWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="retro-wiki-europe" />;
}
