import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-old-school-server-germany');
}

export default function BlazeraOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-old-school-server-germany" />;
}
