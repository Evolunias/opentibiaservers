import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-wiki');
}

export default function OldSchoolNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-wiki" />;
}
