import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-wiki-canada');
}

export default function RetroWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="retro-wiki-canada" />;
}
