import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-neprenia-official');
}

export default function OldSchoolNepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-neprenia-official" />;
}
