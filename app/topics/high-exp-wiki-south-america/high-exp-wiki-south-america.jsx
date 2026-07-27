import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-wiki-south-america');
}

export default function HighExpWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-wiki-south-america" />;
}
