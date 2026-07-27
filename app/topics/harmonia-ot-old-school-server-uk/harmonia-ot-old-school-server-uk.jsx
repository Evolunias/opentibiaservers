import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-old-school-server-uk');
}

export default function HarmoniaOtOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-old-school-server-uk" />;
}
