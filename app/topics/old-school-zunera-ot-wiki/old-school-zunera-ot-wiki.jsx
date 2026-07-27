import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-wiki');
}

export default function OldSchoolZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-wiki" />;
}
