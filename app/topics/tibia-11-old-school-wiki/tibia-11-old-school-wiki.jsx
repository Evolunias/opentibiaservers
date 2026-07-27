import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-old-school-wiki');
}

export default function Tibia11OldSchoolWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-old-school-wiki" />;
}
