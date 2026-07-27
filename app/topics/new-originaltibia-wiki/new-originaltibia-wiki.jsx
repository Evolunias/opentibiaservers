import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-wiki');
}

export default function NewOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-wiki" />;
}
