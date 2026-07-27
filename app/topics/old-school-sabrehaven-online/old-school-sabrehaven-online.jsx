import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-online');
}

export default function OldSchoolSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-online" />;
}
