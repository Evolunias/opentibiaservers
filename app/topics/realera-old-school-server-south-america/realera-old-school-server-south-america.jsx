import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-old-school-server-south-america');
}

export default function RealeraOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-old-school-server-south-america" />;
}
