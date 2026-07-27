import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-online');
}

export default function OldSchoolMidhemOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-online" />;
}
