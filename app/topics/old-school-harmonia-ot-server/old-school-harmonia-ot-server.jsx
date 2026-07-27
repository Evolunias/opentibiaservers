import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-server');
}

export default function OldSchoolHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-server" />;
}
