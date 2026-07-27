import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-server');
}

export default function OldSchoolDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-server" />;
}
