import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zezenia-online-wiki');
}

export default function OldSchoolZezeniaOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-zezenia-online-wiki" />;
}
