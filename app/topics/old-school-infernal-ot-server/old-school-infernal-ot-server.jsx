import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-server');
}

export default function OldSchoolInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-server" />;
}
