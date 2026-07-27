import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-wiki');
}

export default function AldoraWikiKeywordPage() {
  return <StaticKeywordPage slug="aldora-wiki" />;
}
