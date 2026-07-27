import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-old-school-server-latin-america');
}

export default function BlazeraOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-old-school-server-latin-america" />;
}
