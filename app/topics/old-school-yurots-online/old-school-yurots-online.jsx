import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-yurots-online');
}

export default function OldSchoolYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-yurots-online" />;
}
