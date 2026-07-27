import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-old-school-server-canada');
}

export default function BlazeraOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-old-school-server-canada" />;
}
