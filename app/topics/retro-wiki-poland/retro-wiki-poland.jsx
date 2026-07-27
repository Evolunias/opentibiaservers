import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-wiki-poland');
}

export default function RetroWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="retro-wiki-poland" />;
}
