import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-private-server');
}

export default function OldSchoolHarmoniaOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-private-server" />;
}
