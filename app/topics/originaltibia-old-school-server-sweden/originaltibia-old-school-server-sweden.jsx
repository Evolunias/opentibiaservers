import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-old-school-server-sweden');
}

export default function OriginaltibiaOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-old-school-server-sweden" />;
}
