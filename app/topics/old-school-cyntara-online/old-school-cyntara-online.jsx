import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-online');
}

export default function OldSchoolCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-online" />;
}
