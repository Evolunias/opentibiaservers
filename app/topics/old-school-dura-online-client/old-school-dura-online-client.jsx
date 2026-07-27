import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-client');
}

export default function OldSchoolDuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-client" />;
}
