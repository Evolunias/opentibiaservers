import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl-online');
}

export default function OldSchoolArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl-online" />;
}
