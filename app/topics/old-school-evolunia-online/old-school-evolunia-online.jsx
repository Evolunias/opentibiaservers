import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia-online');
}

export default function OldSchoolEvoluniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia-online" />;
}
