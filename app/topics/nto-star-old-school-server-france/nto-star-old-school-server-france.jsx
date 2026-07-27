import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-old-school-server-france');
}

export default function NtoStarOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-old-school-server-france" />;
}
