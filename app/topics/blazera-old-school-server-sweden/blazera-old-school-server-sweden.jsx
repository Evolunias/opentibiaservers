import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-old-school-server-sweden');
}

export default function BlazeraOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="blazera-old-school-server-sweden" />;
}
