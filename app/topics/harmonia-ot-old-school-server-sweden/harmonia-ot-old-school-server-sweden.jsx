import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-old-school-server-sweden');
}

export default function HarmoniaOtOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-old-school-server-sweden" />;
}
