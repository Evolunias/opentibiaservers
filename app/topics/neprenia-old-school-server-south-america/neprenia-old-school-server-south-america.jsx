import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-old-school-server-south-america');
}

export default function NepreniaOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-old-school-server-south-america" />;
}
