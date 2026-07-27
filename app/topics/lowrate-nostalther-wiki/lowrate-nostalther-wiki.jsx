import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-wiki');
}

export default function LowrateNostaltherWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-wiki" />;
}
