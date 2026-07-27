import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-old-school-server-usa');
}

export default function DuraOnlineOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-old-school-server-usa" />;
}
