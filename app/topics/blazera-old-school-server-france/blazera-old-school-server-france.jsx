import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-old-school-server-france');
}

export default function BlazeraOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-old-school-server-france" />;
}
