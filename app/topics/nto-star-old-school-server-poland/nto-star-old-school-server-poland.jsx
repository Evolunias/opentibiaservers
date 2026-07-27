import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-old-school-server-poland');
}

export default function NtoStarOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nto-star-old-school-server-poland" />;
}
