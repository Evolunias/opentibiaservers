import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-old-school-server-sweden');
}

export default function MediviaOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-old-school-server-sweden" />;
}
