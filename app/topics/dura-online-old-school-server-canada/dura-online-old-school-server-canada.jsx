import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-old-school-server-canada');
}

export default function DuraOnlineOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-old-school-server-canada" />;
}
