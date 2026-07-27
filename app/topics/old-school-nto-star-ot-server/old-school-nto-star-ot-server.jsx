import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-ot-server');
}

export default function OldSchoolNtoStarOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-ot-server" />;
}
