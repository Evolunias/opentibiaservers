import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-old-school-server-mexico');
}

export default function NtoStarOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nto-star-old-school-server-mexico" />;
}
