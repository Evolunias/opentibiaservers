import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-online');
}

export default function OldSchoolOxygenotOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-online" />;
}
