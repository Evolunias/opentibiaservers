import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-neprenia-login');
}

export default function OldSchoolNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-neprenia-login" />;
}
