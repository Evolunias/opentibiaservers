import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-login');
}

export default function OldSchoolDuraOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-login" />;
}
