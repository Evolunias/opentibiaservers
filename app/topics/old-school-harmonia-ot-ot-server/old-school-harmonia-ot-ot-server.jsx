import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-ot-server');
}

export default function OldSchoolHarmoniaOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-ot-server" />;
}
