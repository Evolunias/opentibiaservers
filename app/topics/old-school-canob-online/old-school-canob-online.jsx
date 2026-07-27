import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-online');
}

export default function OldSchoolCanobOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-online" />;
}
