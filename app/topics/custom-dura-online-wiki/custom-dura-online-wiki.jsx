import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-wiki');
}

export default function CustomDuraOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-wiki" />;
}
