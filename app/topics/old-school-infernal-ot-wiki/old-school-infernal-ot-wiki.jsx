import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-wiki');
}

export default function OldSchoolInfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-wiki" />;
}
