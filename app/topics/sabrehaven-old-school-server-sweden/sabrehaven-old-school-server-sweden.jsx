import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-old-school-server-sweden');
}

export default function SabrehavenOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-old-school-server-sweden" />;
}
