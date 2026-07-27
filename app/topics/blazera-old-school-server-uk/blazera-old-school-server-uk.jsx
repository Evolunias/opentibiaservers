import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-old-school-server-uk');
}

export default function BlazeraOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-old-school-server-uk" />;
}
