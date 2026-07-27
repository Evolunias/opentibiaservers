import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-ot-server');
}

export default function OldSchoolInfernalOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-ot-server" />;
}
