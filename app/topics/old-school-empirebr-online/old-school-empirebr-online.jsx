import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-online');
}

export default function OldSchoolEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-online" />;
}
