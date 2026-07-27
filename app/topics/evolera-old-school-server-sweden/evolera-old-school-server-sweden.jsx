import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-old-school-server-sweden');
}

export default function EvoleraOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-old-school-server-sweden" />;
}
