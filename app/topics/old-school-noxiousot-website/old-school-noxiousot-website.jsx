import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-website');
}

export default function OldSchoolNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-website" />;
}
