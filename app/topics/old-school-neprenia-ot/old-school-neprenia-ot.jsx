import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-neprenia-ot');
}

export default function OldSchoolNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-neprenia-ot" />;
}
