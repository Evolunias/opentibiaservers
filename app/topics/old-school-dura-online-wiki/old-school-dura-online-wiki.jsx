import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-wiki');
}

export default function OldSchoolDuraOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-wiki" />;
}
