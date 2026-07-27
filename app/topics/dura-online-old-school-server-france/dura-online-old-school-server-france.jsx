import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-old-school-server-france');
}

export default function DuraOnlineOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-old-school-server-france" />;
}
