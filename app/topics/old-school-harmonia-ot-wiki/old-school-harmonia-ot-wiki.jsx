import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-wiki');
}

export default function OldSchoolHarmoniaOtWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-wiki" />;
}
