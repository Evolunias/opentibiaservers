import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-old-school-wiki');
}

export default function Tibia15OldSchoolWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-old-school-wiki" />;
}
