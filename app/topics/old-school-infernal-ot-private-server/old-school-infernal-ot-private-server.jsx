import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-private-server');
}

export default function OldSchoolInfernalOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-private-server" />;
}
