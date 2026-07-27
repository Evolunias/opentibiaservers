import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-online');
}

export default function OldSchoolThorniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-online" />;
}
