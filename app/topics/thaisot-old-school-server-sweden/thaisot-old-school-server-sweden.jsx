import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-old-school-server-sweden');
}

export default function ThaisotOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-old-school-server-sweden" />;
}
