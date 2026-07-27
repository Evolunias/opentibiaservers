import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-online');
}

export default function OldSchoolAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-online" />;
}
