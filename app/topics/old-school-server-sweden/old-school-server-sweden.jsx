import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-sweden');
}

export default function OldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-sweden" />;
}
