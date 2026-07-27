import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-wiki');
}

export default function NewElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-wiki" />;
}
