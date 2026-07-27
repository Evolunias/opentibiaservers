import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-wiki-north-america');
}

export default function LowExpWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-wiki-north-america" />;
}
