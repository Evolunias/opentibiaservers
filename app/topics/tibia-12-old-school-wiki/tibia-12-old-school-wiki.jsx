import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-old-school-wiki');
}

export default function Tibia12OldSchoolWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-old-school-wiki" />;
}
