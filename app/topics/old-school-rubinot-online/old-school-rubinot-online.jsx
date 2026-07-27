import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-online');
}

export default function OldSchoolRubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-online" />;
}
