import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-old-school-server-south-america');
}

export default function ElderaOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-old-school-server-south-america" />;
}
