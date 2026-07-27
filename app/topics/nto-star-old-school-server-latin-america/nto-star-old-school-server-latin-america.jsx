import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-old-school-server-latin-america');
}

export default function NtoStarOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-old-school-server-latin-america" />;
}
