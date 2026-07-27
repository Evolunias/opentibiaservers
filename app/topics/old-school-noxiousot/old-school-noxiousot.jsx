import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot');
}

export default function OldSchoolNoxiousotKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot" />;
}
