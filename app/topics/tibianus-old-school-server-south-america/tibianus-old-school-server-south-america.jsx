import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-old-school-server-south-america');
}

export default function TibianusOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-old-school-server-south-america" />;
}
