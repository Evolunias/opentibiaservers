import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-online');
}

export default function OldSchoolAlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-online" />;
}
