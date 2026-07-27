import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-online');
}

export default function OldSchoolMediviaOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-online" />;
}
