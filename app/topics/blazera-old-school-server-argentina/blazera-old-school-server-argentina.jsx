import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-old-school-server-argentina');
}

export default function BlazeraOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-old-school-server-argentina" />;
}
