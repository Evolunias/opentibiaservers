import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-old-school-server-europe');
}

export default function NtoStarOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nto-star-old-school-server-europe" />;
}
