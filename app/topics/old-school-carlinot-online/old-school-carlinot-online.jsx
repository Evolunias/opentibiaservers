import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-online');
}

export default function OldSchoolCarlinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-online" />;
}
