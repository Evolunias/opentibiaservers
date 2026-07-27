import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-neprenia-client');
}

export default function OldSchoolNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-neprenia-client" />;
}
