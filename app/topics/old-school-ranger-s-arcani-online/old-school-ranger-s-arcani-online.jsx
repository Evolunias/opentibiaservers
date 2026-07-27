import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-online');
}

export default function OldSchoolRangerSArcaniOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-online" />;
}
