import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-old-school-server-usa');
}

export default function BlazeraOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-old-school-server-usa" />;
}
