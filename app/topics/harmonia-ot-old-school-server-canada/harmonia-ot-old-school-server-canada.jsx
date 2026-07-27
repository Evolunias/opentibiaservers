import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-old-school-server-canada');
}

export default function HarmoniaOtOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-old-school-server-canada" />;
}
