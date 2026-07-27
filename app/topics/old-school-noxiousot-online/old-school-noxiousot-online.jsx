import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-online');
}

export default function OldSchoolNoxiousotOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-online" />;
}
