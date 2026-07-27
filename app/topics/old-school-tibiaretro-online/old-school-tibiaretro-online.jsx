import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-online');
}

export default function OldSchoolTibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-online" />;
}
