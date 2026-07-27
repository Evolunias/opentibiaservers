import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-online');
}

export default function OldSchoolNilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-online" />;
}
