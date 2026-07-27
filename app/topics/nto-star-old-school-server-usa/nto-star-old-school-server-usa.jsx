import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-old-school-server-usa');
}

export default function NtoStarOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-old-school-server-usa" />;
}
