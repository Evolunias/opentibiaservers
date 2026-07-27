import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-wiki-south-america');
}

export default function RetroWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-wiki-south-america" />;
}
