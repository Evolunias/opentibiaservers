import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-online');
}

export default function OldSchoolThaisotOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-online" />;
}
