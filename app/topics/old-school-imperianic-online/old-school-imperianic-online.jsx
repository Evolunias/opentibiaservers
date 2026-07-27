import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-online');
}

export default function OldSchoolImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-online" />;
}
