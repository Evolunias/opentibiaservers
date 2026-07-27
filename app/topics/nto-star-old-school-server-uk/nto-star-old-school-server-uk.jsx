import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-old-school-server-uk');
}

export default function NtoStarOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="nto-star-old-school-server-uk" />;
}
