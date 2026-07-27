import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-old-school-server-south-america');
}

export default function OriginaltibiaOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-old-school-server-south-america" />;
}
