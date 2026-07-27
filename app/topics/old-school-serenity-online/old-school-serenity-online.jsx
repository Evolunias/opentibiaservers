import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-online');
}

export default function OldSchoolSerenityOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-online" />;
}
