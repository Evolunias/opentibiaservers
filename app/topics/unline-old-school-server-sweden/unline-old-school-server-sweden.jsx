import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-old-school-server-sweden');
}

export default function UnlineOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-old-school-server-sweden" />;
}
