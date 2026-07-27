import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-official');
}

export default function OldSchoolDuraOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-official" />;
}
