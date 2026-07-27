import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot');
}

export default function OldSchoolHarmoniaOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot" />;
}
