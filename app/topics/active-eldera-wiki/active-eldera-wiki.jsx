import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-wiki');
}

export default function ActiveElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-wiki" />;
}
