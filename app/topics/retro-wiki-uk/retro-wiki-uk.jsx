import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-wiki-uk');
}

export default function RetroWikiUkKeywordPage() {
  return <StaticKeywordPage slug="retro-wiki-uk" />;
}
