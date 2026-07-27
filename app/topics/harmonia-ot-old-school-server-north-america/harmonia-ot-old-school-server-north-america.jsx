import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-old-school-server-north-america');
}

export default function HarmoniaOtOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-old-school-server-north-america" />;
}
