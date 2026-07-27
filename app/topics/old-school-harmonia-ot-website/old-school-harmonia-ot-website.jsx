import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-website');
}

export default function OldSchoolHarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-website" />;
}
