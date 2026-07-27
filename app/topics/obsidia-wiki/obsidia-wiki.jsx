import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-wiki');
}

export default function ObsidiaWikiKeywordPage() {
  return <StaticKeywordPage slug="obsidia-wiki" />;
}
