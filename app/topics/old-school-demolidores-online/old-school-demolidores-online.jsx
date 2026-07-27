import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-online');
}

export default function OldSchoolDemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-online" />;
}
