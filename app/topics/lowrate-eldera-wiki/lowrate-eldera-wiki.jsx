import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-wiki');
}

export default function LowrateElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-wiki" />;
}
