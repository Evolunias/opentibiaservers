import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-old-school-server-france');
}

export default function HarmoniaOtOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-old-school-server-france" />;
}
