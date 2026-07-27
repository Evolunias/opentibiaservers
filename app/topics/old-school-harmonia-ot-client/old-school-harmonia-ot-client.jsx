import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-client');
}

export default function OldSchoolHarmoniaOtClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-client" />;
}
