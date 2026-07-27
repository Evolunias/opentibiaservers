import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-old-school-server-north-america');
}

export default function NtoStarOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-old-school-server-north-america" />;
}
