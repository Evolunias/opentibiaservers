import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus-online');
}

export default function OldSchoolClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus-online" />;
}
