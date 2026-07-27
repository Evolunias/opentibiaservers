import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-old-school-server-south-america');
}

export default function MediviaOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-old-school-server-south-america" />;
}
