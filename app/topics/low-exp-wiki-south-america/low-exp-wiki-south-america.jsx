import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-wiki-south-america');
}

export default function LowExpWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-wiki-south-america" />;
}
