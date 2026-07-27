import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-client');
}

export default function OldSchoolNoxiousotClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-client" />;
}
