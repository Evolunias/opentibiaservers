import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-old-school-wiki');
}

export default function Tibia772OldSchoolWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-old-school-wiki" />;
}
