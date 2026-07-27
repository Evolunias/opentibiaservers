import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ot-server-sweden');
}

export default function OldSchoolOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="old-school-ot-server-sweden" />;
}
