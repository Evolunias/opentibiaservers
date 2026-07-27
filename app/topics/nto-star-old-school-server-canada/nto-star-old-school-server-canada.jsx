import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-old-school-server-canada');
}

export default function NtoStarOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-old-school-server-canada" />;
}
