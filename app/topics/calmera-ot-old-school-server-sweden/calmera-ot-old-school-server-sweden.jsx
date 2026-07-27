import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-old-school-server-sweden');
}

export default function CalmeraOtOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-old-school-server-sweden" />;
}
