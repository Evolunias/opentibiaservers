import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-server');
}

export default function OldSchoolNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-server" />;
}
