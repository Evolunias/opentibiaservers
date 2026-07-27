import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-online');
}

export default function OldSchoolMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-online" />;
}
