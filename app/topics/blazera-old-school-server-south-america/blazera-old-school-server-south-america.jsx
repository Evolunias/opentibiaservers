import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-old-school-server-south-america');
}

export default function BlazeraOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-old-school-server-south-america" />;
}
