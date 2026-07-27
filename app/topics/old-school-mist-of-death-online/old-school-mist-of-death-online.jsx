import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-online');
}

export default function OldSchoolMistOfDeathOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-online" />;
}
