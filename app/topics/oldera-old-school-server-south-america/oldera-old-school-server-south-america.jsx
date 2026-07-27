import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-old-school-server-south-america');
}

export default function OlderaOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-old-school-server-south-america" />;
}
