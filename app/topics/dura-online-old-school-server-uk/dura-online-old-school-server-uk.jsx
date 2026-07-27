import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-old-school-server-uk');
}

export default function DuraOnlineOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="dura-online-old-school-server-uk" />;
}
