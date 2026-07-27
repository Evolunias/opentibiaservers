import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-ot-server');
}

export default function OldSchoolDuraOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-ot-server" />;
}
