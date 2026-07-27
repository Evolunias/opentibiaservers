import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-old-school-server-sweden');
}

export default function OlderaOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-old-school-server-sweden" />;
}
