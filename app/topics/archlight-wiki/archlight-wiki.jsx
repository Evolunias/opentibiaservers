import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-wiki');
}

export default function ArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="archlight-wiki" />;
}
