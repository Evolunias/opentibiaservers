import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-old-school-wiki');
}

export default function Tibia81OldSchoolWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-old-school-wiki" />;
}
