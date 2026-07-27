import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-client');
}

export default function OldSchoolInfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-client" />;
}
