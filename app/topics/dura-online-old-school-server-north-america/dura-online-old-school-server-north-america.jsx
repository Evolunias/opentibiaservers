import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-old-school-server-north-america');
}

export default function DuraOnlineOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-old-school-server-north-america" />;
}
