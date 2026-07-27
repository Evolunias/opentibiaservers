import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-old-school-server-brazil');
}

export default function DuraOnlineOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="dura-online-old-school-server-brazil" />;
}
