import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-old-school-server-south-america');
}

export default function HarmoniaOtOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-old-school-server-south-america" />;
}
