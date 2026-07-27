import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-online');
}

export default function OldSchoolRealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-online" />;
}
