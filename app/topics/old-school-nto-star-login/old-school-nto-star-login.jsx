import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-login');
}

export default function OldSchoolNtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-login" />;
}
