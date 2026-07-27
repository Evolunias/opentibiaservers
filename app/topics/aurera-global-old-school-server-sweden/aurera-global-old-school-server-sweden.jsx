import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-old-school-server-sweden');
}

export default function AureraGlobalOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-old-school-server-sweden" />;
}
