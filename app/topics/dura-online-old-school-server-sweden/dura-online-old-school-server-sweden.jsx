import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-old-school-server-sweden');
}

export default function DuraOnlineOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-old-school-server-sweden" />;
}
