import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-server');
}

export default function OldSchoolNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-server" />;
}
