import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-old-school-server-poland');
}

export default function BlazeraOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-old-school-server-poland" />;
}
