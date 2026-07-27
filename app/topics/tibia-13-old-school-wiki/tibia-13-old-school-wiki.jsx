import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-old-school-wiki');
}

export default function Tibia13OldSchoolWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-old-school-wiki" />;
}
