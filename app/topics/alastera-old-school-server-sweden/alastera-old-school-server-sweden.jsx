import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-old-school-server-sweden');
}

export default function AlasteraOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-old-school-server-sweden" />;
}
