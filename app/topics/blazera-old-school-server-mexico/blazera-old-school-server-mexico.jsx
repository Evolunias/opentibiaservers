import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-old-school-server-mexico');
}

export default function BlazeraOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-old-school-server-mexico" />;
}
