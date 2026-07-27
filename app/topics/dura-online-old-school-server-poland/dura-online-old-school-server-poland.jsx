import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-old-school-server-poland');
}

export default function DuraOnlineOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dura-online-old-school-server-poland" />;
}
