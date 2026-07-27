import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-login');
}

export default function OldSchoolHarmoniaOtLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-login" />;
}
