import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-old-school-server-sweden');
}

export default function TibianusOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibianus-old-school-server-sweden" />;
}
