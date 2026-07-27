import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-ot');
}

export default function OldSchoolHarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-ot" />;
}
