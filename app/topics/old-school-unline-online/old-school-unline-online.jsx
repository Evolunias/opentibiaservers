import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline-online');
}

export default function OldSchoolUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline-online" />;
}
