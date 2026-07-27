import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-old-school-server-germany');
}

export default function NtoStarOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nto-star-old-school-server-germany" />;
}
