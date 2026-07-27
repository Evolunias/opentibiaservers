import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-old-school-server-sweden');
}

export default function ElderaOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-old-school-server-sweden" />;
}
