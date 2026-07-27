import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-old-school-server-sweden');
}

export default function InfernalOtOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-old-school-server-sweden" />;
}
