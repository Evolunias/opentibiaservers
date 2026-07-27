import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-ots');
}

export default function OldSchoolDuraOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-ots" />;
}
