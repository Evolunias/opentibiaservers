import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-neprenia-ot-server');
}

export default function OldSchoolNepreniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-neprenia-ot-server" />;
}
