import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores-online');
}

export default function OldSchoolShadowcoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores-online" />;
}
