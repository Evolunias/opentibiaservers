import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-online');
}

export default function OldSchoolInfernalOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-online" />;
}
