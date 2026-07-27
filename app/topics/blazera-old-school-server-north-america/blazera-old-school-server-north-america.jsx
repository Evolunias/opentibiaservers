import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-old-school-server-north-america');
}

export default function BlazeraOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-old-school-server-north-america" />;
}
