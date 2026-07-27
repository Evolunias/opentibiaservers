import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-old-school-server-brazil');
}

export default function BlazeraOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-old-school-server-brazil" />;
}
