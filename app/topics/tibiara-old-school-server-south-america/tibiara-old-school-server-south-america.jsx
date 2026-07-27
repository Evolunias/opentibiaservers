import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-old-school-server-south-america');
}

export default function TibiaraOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-old-school-server-south-america" />;
}
